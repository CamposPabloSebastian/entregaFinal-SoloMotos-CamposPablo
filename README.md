# SomoMotos *eCommerce*.

Proyecto creado con 

## Finalidad del proyecto

El proyecto tiene la finalidad de facilitar a los usuarios de motocicletas encontrar su vehiculo adecuado con mayor facilidad sin tener que visitar muchas web's.

### Tecnologias utilizadas.
La pagina web esta desarrollada en [React](https://github.com/facebook/create-react-app).
 Utilizando para mejora en la interface:
- [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/).
- [react-hot-toast](https://react-hot-toast.com/)
- [Loading.io](https://loading.io/css/)

Y para el almacenamiento de datos:
- [Firabase](https://firebase.google.com/).
  
  
## Conexion a la base de datos.

Para obtener la informacion de nuestra base de datos una vez configurada la conexion en el **index.js** de nuestro proyecto [Documentacion Firabase](https://firebase.google.com/), en nuestro componente **ItemListContainer** solicitamos los datos como lo indica la *Documenteacion de Firabase*.


```javaScript
 useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'soloMotos-Items');
        const q = query(itemsCollection, where('marca', '==', filter))
        filter ?
            getDocs(q).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
            }) :

            getDocs(itemsCollection).then(snapshot => {
                const data = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setData(data);
            });
    }, [filter]);
```

Podemos observar que condicionalmente por un filtro traemos toda la informacion de nuestra base de datos o bien un elemento especifico segun filtro.

## Almacenamiento ordenes de compra.
Para poder realizar el almacenamiento se ah creado un componente **CartContext** donde tendremos toda la logica y variables de almacenamiento del proceso de la compra, creando un estado donde se iran almacenando cada item, con su cantidad en un arrar, y al momento de finalizar la compra tengamos todos los datos por medio del contexto en el componente **Cart**.

#### CartContext.
- En este componente se crea un **CartProvider** el cual permite que los componentes que lo consumen se suscriban a los cambios del contexto.

```javaScript
const CartProvider = ({ children }) => 
    {
         const [cart, setCart] = useState([]);

        ...Logica del contxto, (Ver componente)

    }

export { CartProvider, CartContext };
```

- A su ver tambien crearemos el contexto,

```javaScript
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
```

- y el estado para almacenar la informacion

```javaScript
const [cart, setCart] = useState([]);
```

### Finalizando compras.
Para poder finalizar la compra debemos rellenar un formulario, componente **ContactForm** donde se dejaran los datos para asociar los productos a un comprador y almacenarlos.

obtener datos del formulario del comprador.
   
1. Creamos un estado donde almacenaremos los datos obtenidos.
   
      ```javaScript
        const [form, setForm] = useState(
            {
                name: '',
                email: '',
                mensaje: '',
            });
   ```
   
2. Creamos el evento que se ejecutara cada que tengamos cambios en los campos del formuraio.
Donde realizamos una destructuracion del evento y lo guardamos en el estado del formulario.

   ```javaScript
        const changeHandler = (ev) => 
        {
            const { value, name } = ev.target;
            setForm({ ...form, [name]: value });
        }
   ```

3. Al clickear el boton enviar del formulario se crear un nuevo objeto (order) que contiene los productos del carrito y un comprador (con los datos obtenidos del formulario), se lo enviar a la BBDD y se resetea el formulario.


```javaScript
 const submitHandler = (ev) => {
        ev.preventDefault();

        const db = getFirestore();
        const formCollection = collection(db, 'orders');

        const order = {
            form,
            items: cart.map(item => (
                {
                    id: item.id,
                    titulo: `${item.marca} - ${item.modelo}`,
                    precio: item.precio,
                    cantidad: item.amount
                }
            )),
            total: totalCart(),
        }

        addDoc(formCollection, order).then((snapshot) => {
            setForm({
                name: '',
                email: '',
                mensaje: '',
            });
            setId(snapshot.id);
        });
        toast.success("Compra exitosa!", {
            position: 'top-right',
            style: {
                borderRadius: '10px',
                background: '#053641',
                color: '#fff',
                padding: '16px',
                minWidth: '250px',
            }
        });
    }
```


*La pagina web seguira mejorando y aplicando nuevas funcionalidades, se intentara dejarla en produccion realmente y que muchos usuarios puedan disfrutar de ella*

[Linkedin](https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin) Pablo Sebastian Campos.