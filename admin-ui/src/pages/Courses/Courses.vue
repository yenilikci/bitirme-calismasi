<template>
  <div class="container">
    <div class="d-block mt-2">
      <div class="card p-3 shadow">
        <template v-if="courseList.length > 0">
          <div class="card-header border-0 mx-3 shadow ">
            <h1 class="header text-center">
              Kurs Listesi
            </h1>
          </div>
          <div class="p-3">
            <b-table
                style="text-align: center;"
                striped
                class="border-0 shadow"
                hover
                :items="courseList"
                :fields="fields"
            >
              <template #cell(created)="row">
                {{ formatDate(row.item.createdAt) }}
              </template>
              <template #cell(updated)="row">
                {{ formatDate(row.item.updatedAt) }}
              </template>
              <template #cell(edit)>
                <b-button
                    size="sm"
                    variant="primary"
                >
                  Edit
                </b-button>
              </template>
              <template #cell(delete)>
                <b-button
                    size="sm"
                    variant="danger"
                >
                  Delete
                </b-button>
              </template>
            </b-table>
          </div>
        </template>
        <template v-else>
          <div>
            <b-alert variant="danger" show class="text-center p-5">
              <h3>
                Kurs Bulunamadı!
              </h3>
            </b-alert>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
  data() {
    return {
      courseList: [],
      fields: [
        {
          key: "type",
          sortable: true
        },
        {
          key: "title",
          sortable: true,
        },
        {
          key: "description",
          sortable: true
        },
        {
          key: "coverImage",
          label: "Cover",
          sortable: true
        },
        {
          key: "author",
          sortable: true
        },
        {
          key: "created",
          sortable: true
        },
        {
          key: "updated",
          sortable: true
        },
        {
          key: "edit",
          sortable: false
        },
        {
          key: "delete",
          sortable: false
        }
      ]
    };
  },
  methods: {
    getCourseList() {
      this.$service.Course.GetCourseList().then(res => {
        console.log(res);
        this.courseList = res.data;
      });
    },
    formatDate(date) {
      return date.split('T')[0] + ' ' + date.split('T')[1].split('.')[0];
    }
  },
  created() {
    this.getCourseList();
  }
};
</script>

<style scoped></style>
