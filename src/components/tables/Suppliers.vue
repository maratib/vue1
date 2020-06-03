<template>
  <div class="pa-5" style="background: #fff">
    <v-data-table
      :loading="isLoading()"
      loading-text="Loading... Please wait"
      :headers="headers"
      :items="items"
      :search="search"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="name"
      show-expand
      sort-by="name"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ titleText }}</v-toolbar-title>
          <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
          <!-- <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>-->
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:item.name="{ item }">
        {{item.name}}
        <v-icon small class="myblue--text" v-if="item.current" title="Current Supplier">mdi-check</v-icon>
      </template>
      <!-- <template v-slot:item.name="{ item }">
        <span class="myblue--text" v-html="item.name"></span>
      </template>-->
      <template v-slot:item.prating="{ item }">
        <v-rating
          v-model="item.prating"
          dense
          readonly
          half-increments
          background-color="gray lighten-3"
          color="gray"
        ></v-rating>
      </template>
      <template v-slot:item.mrating="{ item }">
        <v-rating
          v-model="item.mrating"
          dense
          readonly
          half-increments
          background-color="myblue--text lighten-3"
          color="myblue"
        ></v-rating>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)" title="Edit">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)" title="Delete">mdi-delete</v-icon>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
      </template>
      <template v-slot:footer>
        <v-toolbar flat color="white">
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-container class="mt-5">
                <v-row align="center">
                  <v-col cols="2">
                    <v-btn color="primary" outlined dark class="mb-2" v-on="on">Add recipient</v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      color="primary"
                      outlined
                      dark
                      class="mb-2 ml-5"
                      @click="importRecipient"
                    >Import recipient</v-btn>
                  </v-col>
                  <v-col cols="8" class="text-right">
                    <span class="caption">
                      <v-icon small class="myblue--text mr-2" title="Current Supplier">mdi-check</v-icon>Current supplier
                    </span>
                  </v-col>
                </v-row>
              </v-container>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.name" label="Company name"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.contact" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="editedItem.location" label="Location"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-switch
                        v-model="editedItem.current"
                        class="mx-2"
                        label="Is current supplier?"
                      ></v-switch>
                    </v-col>
                    <v-col cols="6">
                      <!-- <v-text-field v-model="editedItem.prating" label="Performance Rating"></v-text-field> -->
                      <span class="caption">Performance Rating</span>
                      <v-rating
                        v-model="editedItem.prating"
                        dense
                        half-increments
                        background-color="gray--text lighten-3"
                        color="gray"
                      ></v-rating>
                    </v-col>

                    <v-col cols="6">
                      <span class="caption">Match Rating</span>
                      <v-rating
                        v-model="editedItem.mrating"
                        dense
                        half-increments
                        background-color="myblue--text lighten-3"
                        color="myblue"
                      ></v-rating>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-divider class="mx-auto"></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#4ac2e1" text @click="close">Cancel</v-btn>
                <v-btn color="#4ac2e1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: ["titleText"],
  data: () => ({
    rating: 4.5,
    dialog: false,
    loading: false,
    expanded: [],
    singleExpand: true,
    search: "",
    headers: [
      {
        text: "COMPANY NAME",
        align: "start",
        sortable: true,
        value: "name",
        class: "myblue--text"
      },
      { text: "PERFORMANCE RATING", value: "prating", class: "myblue--text" },
      { text: "CONTACT DETAILS", value: "contact", class: "myblue--text" },
      { text: "LOCATIONS", value: "location", class: "myblue--text" },
      { text: "MATCH RATING", value: "mrating", class: "myblue--text" },
      {
        text: "",
        value: "actions",
        sortable: false,
        fixed: true,
        width: "80px"
      }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      contact: "",
      location: "",
      prating: 0,
      mrating: 0,
      current: 0
    },
    defaultItem: {
      name: "",
      contact: "",
      location: "",
      prating: 0,
      mrating: 0,
      current: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Supplier" : "Edit Supplier";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.items = [
        {
          name: "Desso",
          contact: "christina@desso.co.uk",
          location: "Paris [6]",
          prating: 4.6,
          mrating: 4.7,
          current: 0
        },
        {
          name: "Wilkoma",
          prating: 1.7,
          contact: "viloet@descon.com",
          location: "Munich [4]",
          mrating: 2.5,
          current: 0
        },
        {
          name: "Regal Brackets",
          prating: 3.5,
          contact: "marvin@gmail.com",
          location: "Hawaii [2]",
          mrating: 3.0,
          current: 0
        },
        {
          name: "Marvo Brackets",
          prating: 3.6,
          contact: "marvobrackets@marvo.co.uk",
          location: "Rome [3]",
          mrating: 4.0,
          current: 0
        },
        {
          name: "Hulko Ltd",
          prating: 2.6,
          contact: "atlast@mario.co.uk",
          location: "Shanghai [4]",
          mrating: 3.0,
          current: 0
        },
        {
          name: "Nike",
          prating: 3.6,
          contact: "monarch@monacho.co.uk",
          location: "London [3]",
          mrating: 4.0,
          current: 1
        },
        {
          name: "Amazon",
          prating: 4.6,
          contact: "christina@desso.co.uk",
          location: "Frankfert [6]",
          mrating: 4.0,
          current: 0
        }
      ];
    },
    deleteItem(item) {
      if (confirm("Are you sure you want to delete this item?")) {
        const index = this.items.indexOf(item);
        this.loading = false;
        this.items.splice(index, 1);
        this.$notify({
          group: "items",
          type: "error",
          title: `Deleted`,
          text: "Record has been deleted successfully..."
        });
      }
    },
    isLoading() {
      return this.loading;
    },
    importRecipient() {
      alert("Comming soon");
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style>
</style>