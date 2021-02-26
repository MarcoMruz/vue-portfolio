<template>
  <div>
    <div v-if="showAlertAfterSubmit" class="mt-10 mb-10">
      <v-alert
        v-if="successfullSubmit"
        dense
        dismissible
        elevation="4"
        outlined
        prominent
        text
        type="success"
        >{{ responseMessage }}</v-alert
      >
      <v-alert
        v-else
        dense
        dismissible
        elevation="4"
        outlined
        prominent
        text
        type="error"
        >{{ responseMessage }}</v-alert
      >
    </div>
    <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-select
        v-model="course"
        :items="items"
        :error-messages="courseErrors"
        label="Course"
        required
        @change="$v.course.$touch()"
        @blur="$v.course.$touch()"
      ></v-select>
      <v-checkbox
        v-model="acceptedTerms"
        :error-messages="acceptedTermsErrors"
        label="Do you agree?"
        required
        @change="$v.acceptedTerms.$touch()"
        @blur="$v.acceptedTerms.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import { formAPIs } from "../../apiURLs/formsAPI";

import axios from "axios";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    course: { required },
    acceptedTerms: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    course: null,
    items: ["ReactJS", "Svelte", "VueJS", "Angular"],
    acceptedTerms: false,
    showAlertAfterSubmit: false,
    successfullSubmit: false,
    responseMessage: "",
  }),

  computed: {
    acceptedTermsErrors() {
      const errors = [];
      if (!this.$v.acceptedTerms.$dirty) return errors;
      !this.$v.acceptedTerms.checked &&
        errors.push("You must agree to continue!");
      return errors;
    },
    courseErrors() {
      const errors = [];
      if (!this.$v.course.$dirty) return errors;
      !this.$v.course.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        const reqBody = Object.create({
          name: this.name,
          email: this.email,
          acceptedTerms: this.acceptedTerms,
          course: this.course,
          createdAt: new Date(),
        });

        console.log(reqBody);

        axios
          .post(formAPIs.mainFormAPI("currentUserId"), { ...reqBody })
          .then((res) => {
            console.log(res);
            this.responseMessage = "Successfull submit of form";
            this.successfullSubmit = true;
            this.showAlertAfterSubmit = true;
          })
          .catch((error) => {
            console.log(error);
            this.responseMessage = "There was an error when submitting";
            this.showAlertAfterSubmit = true;
          });
      }
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.course = null;
      this.acceptedTerms = false;
    },
  },
};
</script>
