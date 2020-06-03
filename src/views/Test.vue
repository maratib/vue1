<template>
  <div>
    <h1>Test Page</h1>
    <ValidationObserver ref="obs">
      <v-form>
        <v-date-field-with-validation rules="required" v-model="from" label="From" />

        <v-text-field-with-validation
          rules="required|min:10|max:100"
          v-model="name"
          :counter="100"
          label="Name"
        />

        <custom-input v-model="inputVal" />
        <h4>InputVal : {{ inputVal }}</h4>
        <h4>From : {{ from }}</h4>

        <br />
        <br />
        <br />
        <br />
        <br />

        <v-btn @click="check">Check</v-btn>
      </v-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import VTextFieldWithValidation from "@/components/forms/inputs/VTextFieldWithValidation";
import VDateFieldWithValidation from "@/components/forms/inputs/VDateFieldWithValidation";
import CustomInput from "@/components/test/CustomInput";
export default {
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
    VDateFieldWithValidation,
    CustomInput
  },
  data: () => ({
    name: "",
    from: "",
    inputVal: ""
  }),
  methods: {
    check() {
      alert(this.name + "-" + this.from);
    }
  }
};
</script>

<style>
</style>