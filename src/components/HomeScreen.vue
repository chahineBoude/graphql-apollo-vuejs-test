<template>
  <div class="btn-grp">
    <button @click="listBtn">List the users</button>
    <button @click="formBtn">Add user</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    formBtn() {
      this.$emit("formHome");
    },
    listBtn() {
      this.$emit("listHome");
    },
  },
};
</script>

<style>
.btn-grp {
  margin: auto;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-grp button {
  background: #6543e2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 25px;
  letter-spacing: 2px;
  cursor: pointer;
  margin: 10px;
}
</style>
