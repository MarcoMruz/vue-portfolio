<template>
  <div>
    {{ $t("message.hello") }}
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  i18n: {
    messages: {
      sk: {
        message: {
          hello:
            "Toto je nejaky random text, ktory mozete uvidiet ked pridete na tuto podstranku... Vitajte!!!",
        },
      },
      en: {
        message: {
          hello:
            "This is some random text that you will see when you come to this subpage... Welcome!!!",
        },
      },
    },
  },
});
</script>
