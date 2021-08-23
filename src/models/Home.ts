import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// Importando componentes
@Options({
  components: {
    HelloWorld,
  },
})

class Home extends Vue {
    data() {
        return {
            data: ''
        }
    }
}

export default Home