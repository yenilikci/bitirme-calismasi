<template>
  <div class="container">
    <div class="d-block mt-5">
      <div class="card p-3 shadow">
        <div class="card-header border-0 mx-3 shadow">
          <h1 class="text-secondary header">
            <b-icon-person-check-fill class="mr-2"></b-icon-person-check-fill
            >
            Giriş Yap
          </h1>
        </div>
        <div class="card-body mt-2">
          <form @submit.prevent="onSubmit">
            <div class="form-group shadow bg-light p-3">
              <label class="title">E-posta Adresiniz:</label>
              <input
                  @blur="$v.email.$touch()"
                  v-model="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': $v.email.$error }"
                  placeholder="ornek@test.com"
              />
              <small v-if="!$v.email.required && isSubmit" class="form-text text-danger">
                Email alanı giriş yapmak isteyen kullanıcılar için doldurulması
                zorunlu bir alandır
              </small>
              <small v-if="!$v.email.email && isSubmit" class="form-text text-danger">
                Lütfen geçerli formatta bir e-posta adresi giriniz
              </small>
            </div>
            <div class="form-group shadow bg-light p-3">
              <label class="title">Şifreniz:</label>
              <input
                  @blur="$v.password.$touch()"
                  v-model="password"
                  type="password"
                  class="form-control"
                  :class="{ 'is-invalid': $v.password.$error }"
                  placeholder="******"
              />
              <small v-if="!$v.password.required && isSubmit" class="form-text text-danger">
                Parola alanı giriş yapmak isteyen kullanıcılar için doldurulması
                zorunlu bir alandır
              </small>
            </div>
            <button
                class="btn btn-outline-success rounded btn-block p-3 shadow"
            >
              Giriş
            </button>
          </form>
        </div>
        <div class="jumbotron p-2 mx-3 text-center">
          <router-link to="/sifremiunuttum" class="f-password">
            <b-icon-patch-question></b-icon-patch-question>
            Şifremi Unuttum?
          </router-link>
        </div>
        <div class="card-footer text-center text-secondary pb-4 pt-4">
          Admin UI Login
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {email, required} from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      isSubmit: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  methods: {
    onSubmit() {
      this.isSubmit = true;
      console.log(this.email);
      console.log(this.password);
      if (this.$v.$invalid) { // validation problem
        console.log('error')
      } else {
        this.$service.Auth.Login(this.email, this.password).then(
            (response) => {
              if (response.status === 200) {
                this.$vToastify.success('Giriş Başarılı', 'Başarılı');
                this.$store.commit('auth/setUser', {
                  'full_name': response.data.full_name,
                  'email': response.data.email,
                });
                this.$store.commit("auth/setToken", response.data.tokens.access_token);
                this.$router.push('/');
              } else {
                this.$vToastify.error('Giriş Başarısız', 'Başarısız');
              }
            },
            (error) => {
              this.$vToastify.error('Giriş Başarısız', 'Başarısız');
              console.log(error);
            }
        );
      }
    },
  },
};
</script>

<style scoped>
.header {
  font-size: 28px;
  font-weight: 500;
  text-align: center;
}

.title {
  font-weight: 400;
  color: lightslategray;
}

.f-password {
  cursor: pointer;
  text-decoration: none;
}
</style>
