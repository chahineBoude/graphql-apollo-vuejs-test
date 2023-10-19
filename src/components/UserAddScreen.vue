<template>
  <form @submit.prevent="formSubmit">
    <label>First name</label>
    <input type="text" required v-model="firstName" />
    <label>Last name</label>
    <input type="text" required v-model="lastName" />
    <label>Email</label>
    <input type="email" required v-model="email" />
    <div class="submit">
      <button>create a user</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  methods() {
    console.log("submit");
  },
};
</script>

<style scoped>
form {
  max-width: 520px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
.submit {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
button {
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
