<template>
  <h1>FizzBuzz</h1>
  <h3>Insert a number and press a button.</h3>
  <input v-model="inputNumber" placeholder="your number" />
  <button v-on:click="checkNumber">▶</button>
  <input v-model="result" placeholder="" />

  <div id="errorMessage">{{ errorMessage }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FizzBuzz",
  data() {
    return {
      result: "",
      errorMessage: "",
      inputNumber: ""
    };
  },
  methods: {
    isValid(inputNumber: number): boolean {
      if (!Number.isInteger(inputNumber) || inputNumber <= 0) {
        return false;
      }

      return true;
    },

    calculate(number: number): string {
      let result = "";

      if (number % 3 === 0) {
        result = "Fizz";
      }

      if (number % 5 === 0) {
        result += "Buzz";
      }

      if (!result) {
        result = number.toString();
      }

      return result;
    },

    checkNumber(): void {
      // reset fields
      this.errorMessage = "";
      this.result = "";

      const number = Number(this.inputNumber);

      // validate
      if (!this.isValid(number)) {
        this.errorMessage = "Please insert a valid positive integer";
        return;
      }

      // calculate
      this.result = this.calculate(number);
    }
  }
});
</script>

<style scoped>
input,
button {
  display: inline-block;
  width: 120px;
  height: 40px;
  border: 1px solid gray;
  outline: none;
}

button {
  width: 36px;
  height: 36px;
  border-radius: 18px;
  padding-left: 10px;
}

button:hover {
  border: 1px solid rgb(57, 57, 57);
  background-color: rgb(217, 217, 217);
}

button:active {
  color: white;
  border: 1px solid rgb(27, 27, 27);
  background-color: rgb(161, 161, 161);
}

input {
  margin: 10px;
  height: 35px;
  text-align: center;
  font-size: medium;
}

#errorMessage {
  color: red;
}
</style>
