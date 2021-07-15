<template>
  <form @submit.prevent="checkForm()">
    <h2 class="p10">Добавить вид семян</h2>
    <div class="fields">
      <label for="name" class="mb5">Название</label>
      <input
        id="name"
        type="text"
        v-model.trim="form.name"
        placeholder='Пример "Гречка"'
      />
      <span v-if="error.find((item) => item.name === 'name')" class="error">{{
        error.find((item) => item.name === "name").messages
      }}</span>
    </div>
    <div class="dateList">
      <h3 class="p10">Параметры</h3>
      <div
        class="dateList__item"
        v-for="param in form.params"
        :key="param.name"
      >
        <div class="fields fields_flex">
          <label :for="param.name">{{ param.name }} год</label>
          <input
            :id="param.name"
            type="number"
            v-model.number="
              form.params.find((item) => item.name === param.name).value
            "
            placeholder="Число"
          />
          <span
            v-if="error.find((item) => item.name === param.name)"
            class="error"
            >{{ error.find((item) => item.name === param.name).messages }}</span
          >
        </div>
      </div>
    </div>
    <div class="fieldsButton">
      <button type="submit">Добавить</button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        params: [],
      },
      error: [],
    };
  },
  computed: {
    ...mapGetters(["paramsStore", "listStore"]),
  },
  beforeMount() {
    this.paramsStore.forEach((item, i) => {
      this.form.params[i] = { name: item, value: "" };
    });
  },
  methods: {
    checkForm() {
      this.error = [];
      if (this.form.name === "") {
        this.error.push({
          name: "name",
          messages: "Добавьте название.",
        });
      }
      if (this.listStore.find((item) => item.name === this.form.name)) {
        this.error.push({
          name: "name",
          messages: "Данное семя уже сушествует.",
        });
      }
      this.form.params.forEach((item) => {
        if (item.value === "") {
          this.error.push({
            name: item.name,
            messages: "Добавьте параметр.",
          });
        }
      });
      if (this.error.length > 0) {
        return false;
      }
      
      this.$store.commit("checkFormStore", {
        name: this.form.name,
        params: this._paramsSend(),
      });
      setTimeout(() => {
        this.form.name = "";
        this.form.params.map((item) => {
          item.value = "";
          return item;
        });
      }, 100);
    },
    _paramsSend(){
      let params = [];
      this.form.params.forEach((item, i) => {
        params[i] = { name: item.name, value: item.value}
      });
      return params;
    }
  },
};
</script>

<style lang="scss" scoped>
.fields {
  padding: 10px;
  label {
    display: block;
    font-weight: bold;
  }
  input {
    border: 2px #dedede solid;
    padding: 8px;
    border-radius: 4px;
    width: calc(100% - 4px - 16px);
    display: block;
  }
  .error {
    font-size: 11px;
    color: red;
    margin-top: 3px;
    display: block;
  }
  &_flex {
    display: flex;
    padding: 10px;
    align-items: center;
    flex-wrap: wrap;
    label {
      width: 100px;
    }
    input {
      width: calc(100% - 4px - 16px - 100px);
    }
    .error {
      margin-left: 100px;
    }
  }
}
.fieldsButton {
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 20px);
  padding: 10px;
  button {
    background-color: rgb(0, 55, 207);
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.8;
      transition: 0.3s;
    }
  }
}
</style>