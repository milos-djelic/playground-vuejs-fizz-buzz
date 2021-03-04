import { shallowMount } from "@vue/test-utils";
import FizzBuzz from "@/components/FizzBuzz.vue";

describe("FizzBuzz", () => {
  describe("calculate(): ", () => {
    it("should return Fizz for numbers divisible by 3", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.calculate(123);

      expect(result).toEqual("Fizz");
    });

    it("should return Fizz for numbers divisible by 5", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.calculate(155);

      expect(result).toEqual("Buzz");
    });

    it("should return Fizz for numbers divisible by 15", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.calculate(165);

      expect(result).toEqual("FizzBuzz");
    });

    it("should return Fizz for numbers not divisible by 15", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.calculate(13);

      expect(result).toEqual("13");
    });
  });

  describe("isValid() :", () => {
    it("should return false if a number is less than or equal zero", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.isValid(-9);

      expect(result).toEqual(false);
    });

    it("should return false if not a number is passed", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.isValid("12a");

      expect(result).toEqual(false);
    });

    it("should return false if empty string is passed", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.isValid("");

      expect(result).toEqual(false);
    });

    it("should return true if a positive number is passed", () => {
      const wrapper = shallowMount(FizzBuzz);
      const result = wrapper.vm.isValid(199);

      expect(result).toEqual(true);
    });
  
  });

  describe("checkNumber(): ", () => {
    it("should update the result with the correct check result ", () => {
      const wrapper = shallowMount(FizzBuzz);
      wrapper.vm.inputNumber = 12;
      wrapper.vm.checkNumber();

      expect(wrapper.vm.result).toEqual("Fizz");
      
    });

    it("should update the error message for the invalid number ", () => {
      const wrapper = shallowMount(FizzBuzz);
      wrapper.vm.inputNumber = "21a";
      wrapper.vm.checkNumber();

      const expectedErrorMessage = "Please insert a valid positive integer";
      expect(wrapper.vm.errorMessage).toEqual(expectedErrorMessage);
      
    });

    it("should not update the result for the invalid number ", () => {
      const wrapper = shallowMount(FizzBuzz);
      wrapper.vm.inputNumber = "21a";
      const initialResult = wrapper.vm.result;
      wrapper.vm.checkNumber();

      expect(wrapper.vm.result).toEqual(initialResult);
    });
  });
});
