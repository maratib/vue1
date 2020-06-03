<template>
  <div class="pa-5" style="background: #fff">
    <v-data-table
      :loading="isLoading()"
      loading-text="Loading... Please wait"
      :headers="headers"
      :items="items"
      :search="search"
      sort-by="name"
      :hide-default-footer="true"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ titleText }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
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
        <v-btn color="success" dense outlined @click="addRecipient(item)">Add to recipient</v-btn>
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
          name: "Frami Ltd",
          contact: "lucile@frami.com",
          location: "Dallas [6]",
          prating: 2.6,
          mrating: 4.7,
          current: 0
        },
        {
          name: "Heaney Parts",
          prating: 4.7,
          contact: "lolet@heanyparts.com",
          location: "Bucharest [4]",
          mrating: 3.5,
          current: 0
        },
        {
          name: "Tyle Shoals Ltd",
          prating: 3.5,
          contact: "randy@tylershoals.com",
          location: "Madrid [2]",
          mrating: 3.0,
          current: 0
        }
      ];
    },
    addRecipient(item) {
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
    }
  }
};
</script>

<style>
</style>