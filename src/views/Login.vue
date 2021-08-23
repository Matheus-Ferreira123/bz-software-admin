<template>
<div id="content-area" class="card p-3">
    <form>
        <div id="logo"><img src="../assets/images/logo.png"></div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">Nunca compartilharemos seu e-mail com mais ninguém.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Lembrar senha</label>
        </div>
        <div class="d-md-flex justify-content-md-end">
            <button type="submit" class="btn btn-success">Entrar</button>
        </div>
    </form>
</div>
</template>

<style src="@/assets/css/login.css">
</style>
<style src="@/assets/css/normalize.css">
</style>

<!-- Importação do model -->
<script lang="ts">
  import Login from "@/models/Login"
  export default Login
</script>