<template>
    <nav id="menu-header" class="navbar navbar-dark bg-dark p-3">
        <div>
            <div class="text-white">BZ-SOFTWARE</div>
        </div>
        <div>
            <button type="button" class="btn btn-danger">Sair</button>
        </div>
    </nav>
    <div id="cards-content-area" class="content-area p-3 row">
        <div class="card text-white bg-primary mb-2 col-lg-3 col-md-3 col-sm-12">
            <div class="card-header text-center">Usuários cadastrados</div>
                <div class="card-body">
                <h5 class="card-title text-center">999</h5>
                <p class="card-text"></p>
            </div>
        </div>
        <div class="card text-white bg-primary mb-2 col-lg-3 col-md-3 col-sm-12">
            <div class="card-header text-center">Distância</div>
                <div class="card-body">
                <h5 class="card-title text-center">999</h5>
                <p class="card-text"></p>
            </div>
        </div>
        <div class="card text-white bg-primary mb-2 col-lg-3 col-md-3 col-sm-12">
            <div class="card-header text-center">Dados</div>
                <div class="card-body">
                <h5 class="card-title text-center">999</h5>
                <p class="card-text"></p>
            </div>
        </div>
        <div class="card text-white bg-primary mb-2 col-lg-3 col-md-3 col-sm-12">
            <div class="card-header text-center">Usuários</div>
                <div class="card-body">
                <h5 class="card-title text-center">999</h5>
                <p class="card-text"></p>
            </div>
        </div>
    </div>
    <div class="content-area">
        <div id="table-title" class="d-flex justify-content-between align-items-center p-3">
            <div class="text-white fs-4">Gerenciamento de empresas</div>
            <div>
                <button type="button" class="btn btn-sm btn-danger me-3">Apagar</button>
                <button type="button" class="btn btn-sm btn-success">Adicionar</button>
            </div>
        </div>
        <div class="table-responsive card p-3">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></th>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        </td>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><i class="fas fa-edit text-warning"></i><i class="fas fa-trash-alt lixo text-danger"></i></td>
                    </tr>
                    <tr>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        </td>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td><i class="fas fa-edit text-warning"></i><i class="fas fa-trash-alt lixo text-danger"></i></td>
                    </tr>
                    <tr>
                        <td>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        </td>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td><i class="fas fa-edit text-warning"></i><i class="fas fa-trash-alt lixo text-danger"></i></td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-between align-items-center">
                <div>Mostrando <span>15</span> itens de <span>15</span></div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style src="@/assets/css/admin.css">
</style>
<style src="@/assets/css/normalize.css">
</style>


<!-- Importação do model -->
<script lang="ts">
  import Admin from "@/models/Admin"
  export default Admin
</script>