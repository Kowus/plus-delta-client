<template>
  <form class="text-left">
    <div class="form-group">
      <label for="username">Username or Email</label>
      <input class="form-control bg-input" id="username" placeholder="Username or Email" />
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control bg-input"
        id="exampleInputPassword1"
        placeholder="Password"
      />
      <label for="exampleInputPassword2">Confirm Password</label>
      <input
        type="password"
        class="form-control bg-input"
        id="exampleInputPassword2"
        placeholder="Confirm Password"
      />
    </div>
    <button type="button" class="btn btn-primary">
      <i class="fas fa-paper-plane"></i> Submit
    </button>
    <p class="text-center">
      Already a member?
      <router-link to="/auth/login">Login</router-link>
    </p>
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      user: {
        username: "",
        password: "",
        cpassword: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
form {
  width: 70%;
  margin: 0 auto;
}
.bg-input {
  background-image: url("&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 16px 18px;
  background-position: 98% 50%;
  cursor: auto;
}
</style>