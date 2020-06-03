<template>
  <div class="ma-5 pa-0" style="background: #fff">
    <v-data-table
      :loading="isLoading()"
      loading-text="Loading... Please wait"
      :headers="headers"
      :items="items"
      :search="search"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      show-expand
      sort-by="name"
      :hide-default-footer="false"
    >
      <template v-slot:top v-if="is_new">
        <CreateProject />
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
      <template v-slot:item.status="{ item }">
        <span v-if="item.status == 0" class="primary--text">{{ statusList[item.status] }}</span>
        <span v-if="item.status == 1" class="green--text">{{ statusList[item.status] }}</span>
        <span v-if="item.status == 2">{{ statusList[item.status] }}</span>
        <span v-if="item.status == 3" class="red--text">{{ statusList[item.status] }}</span>
      </template>
      <template v-slot:item.actions="{ item }">
        <div v-if="item.status == 0 || item.status == 3">
          <v-icon small class="mr-2" @click="editItem(item)" title="Edit">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)" title="Delete">mdi-delete</v-icon>
        </div>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import CreateProject from "@/components/projects/CreateProject";
export default {
  props: ["is_new"],
  components: {
    CreateProject
  },
  data: () => ({
    rating: 4.5,
    statusList: ["Created", "InProgress", "Completed", "Canceled"],
    dialog: false,
    loading: false,
    expanded: [],
    singleExpand: true,
    search: "",
    headers: [
      {
        text: "PROJECTS",
        align: "start",
        sortable: true,
        value: "name",
        width: "60%",
        class: "myblue--text ma-0"
      },
      { text: "FROM", value: "from", class: "primary--text", width: "120px" },
      { text: "TO", value: "to", class: "primary--text", width: "100px" },
      {
        text: "STATUS",
        value: "status",
        class: "primary--text",
        width: "180px"
      },
      {
        text: "ACTIONS",
        value: "actions",
        class: "primary--text",
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
    },
    createNewProject() {
      return this.newProject;
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
          id: 1,
          name: "Project ABC - 1",
          from: "2020-06-01",
          to: "2020-06-05",
          status: 0
        },
        {
          id: 2,
          name: "Project ABC - 2",
          from: "2020-05-18",
          to: "2020-05-19",
          status: 0
        },
        {
          id: 3,
          name: "Project ABC - 3",
          from: "2020-05-16",
          to: "2020-05-17",
          status: 1
        },
        {
          id: 4,
          name: "Project ABC - 4",
          from: "2020-05-14",
          to: "2020-05-15",
          status: 1
        },
        {
          id: 5,
          name: "Project ABC - 5",
          from: "2020-05-12",
          to: "2020-05-13",
          status: 1
        },
        {
          id: 6,
          name: "Project ABC - 6",
          from: "2020-05-10",
          to: "2020-05-11",
          status: 2
        },
        {
          id: 7,
          name: "Project ABC - 7",
          from: "2020-05-08",
          to: "2020-05-09",
          status: 2
        },
        {
          id: 8,
          name: "Project ABC - 8",
          from: "2020-05-06",
          to: "2020-05-07",
          status: 3
        },
        {
          id: 9,
          name: "Project ABC - 9",
          from: "2020-05-01",
          to: "2020-05-05",
          status: 2
        },
        {
          id: 10,
          name: "Project ABC - 10",
          from: "2020-04-25",
          to: "2020-05-05",
          status: 2
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

<style lang="css" scoped>
/* >>> .shadow {
  -moz-box-shadow: inset 0 0 10px #9b9b9b;
  -webkit-box-shadow: inset 0 0 10px #9b9b9b;
  box-shadow: inset 0 0 10px #9b9b9b;
}


>>> .v-data-table-header th:first-child {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
>>> .v-data-table-header th:last-child {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
>>> .v-data-table-header {
  background: red;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 6px;
}
>>> .v-data-table-header th {

  padding-top: 7px;
  border-bottom: thin solid rgba(0, 0, 0, 0.12) !important;
} */
</style>