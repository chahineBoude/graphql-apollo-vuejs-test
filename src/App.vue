<template>
  <h1>GraphQL Test App</h1>
  <HomeScreenVue @formHome="toggleForm" @listHome="toggleList" />
  <div v-if="showForm">
    <UserAddScreenVue />
  </div>
  <ul v-if="showList">
    <li v-for="user of userList" :key="user.id">
      <label>First Name:</label> {{ user.prenom }} <label>Last Name:</label>
      <label>email:</label> {{ user.email }}
      {{ user.nom }}
    </li>
  </ul>
</template>

<script>
import gql from "graphql-tag";
import HomeScreenVue from "./components/HomeScreen.vue";
import UserAddScreenVue from "./components/UserAddScreen.vue";
import { useQuery } from "@vue/apollo-composable";
import { ref, onMounted } from "vue";

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      prenom
      nom
      email
    }
  }
`;

const {} = useQuery;

export default {
  name: "App",
  components: {
    HomeScreenVue,
    UserAddScreenVue,
  },
  setup() {
    const { result } = useQuery(ALL_USERS_QUERY);
    const userList = ref([]);
    console.log(result);
    userList.value = result.value.users;
    userList.value.map((user) => {
      console.log(user);
    });

    const showForm = ref(false); // Create a reactive ref for showForm

    const toggleForm = () => {
      showForm.value = !showForm.value; // Toggle the showForm ref
      showList.value = false;
    };

    const showList = ref(false);

    const toggleList = () => {
      showList.value = !showList.value;
      showForm.value = false;
    };

    return {
      userList,
      showForm,
      showList,
      toggleForm,
      toggleList,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  background: #eee;
}
li {
  color: #1d5596;
  padding: 4px;
  border: 1px solid #eee;
  font-size: 30px;
  border-radius: 4px;
  list-style: none;
  margin: 5px;
}
label {
  font-size: 30px;
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
</style>
