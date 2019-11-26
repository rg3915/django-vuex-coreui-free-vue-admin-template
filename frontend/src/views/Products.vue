<template>
  <div>
    
    <b-row>
      <b-col lg="12">
        <c-table :table-data="$store.state.products" :fields="{name: 'Nome', price: 'Preço', actions: 'Ações'}" caption="Produtos"></c-table>
        <div class="card">
          <div class="card-header">
            Produtos
            <b-button variant="primary" class="ml-2" @click="isVisible = true"><i class="fa fa-plus"></i> Adicionar</b-button>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in $store.state.products" :key="product.pk">
                  <td>{{ product.name }}</td>
                  <td>{{ product.price }}</td>
                  <td>
                    <b-button @click="editProduct(product)">Editar</b-button>
                    <b-button variant="danger" @click="deleteProduct(product)">Apagar</b-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-modal :visible="isVisible" title="Adicionar produto" @ok="sendProduct" @hidden="clearModal">
      <b-form-group label="Nome" label-for="product-name">
        <b-form-input id="product-name" v-model="editingProduct.name"></b-form-input>
      </b-form-group>
      <b-form-group label="Preço" label-for="product-price">
        <b-form-input type="number" id="product-price" v-model="editingProduct.price"></b-form-input>
      </b-form-group>
    </b-modal>
  </div>
</template>
<script>
import cTable from './base/Table.vue'

export default {
  components: {
    cTable,
  },
  data() {
    return {
      isVisible: false,
      editingProduct: {
        name: '',
        price: 0,
      },
    }
  },
  mounted() {
    this.$store.dispatch('loadProducts');
  },
  methods: {
    sendProduct() {
      if (!this.editingProduct.pk) {
        // Aqui está adicionando, logo no axios seria um post
        this.$store.dispatch('addProduct', this.editingProduct);
      } else {
        // Aqui editando, logo um put
        this.$store.dispatch('editProduct', this.editingProduct);
      }

      this.clearModal();
    },
    editProduct(product) {
      this.isVisible = true;

      this.editingProduct = { ...product };
    },
    deleteProduct(product) {
      if (!confirm('Deseja realmente apagar esse item?')) {
        return;
      }

      this.$store.dispatch('deleteProduct', product);
    },
    clearModal() {
      this.editingProduct = {
        name: '',
        price: 0,
      };

      this.isVisible = false;
    }
  }
}

</script>
