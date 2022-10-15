import {clients} from '../components';
import styles from '../style';


const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key='cleint.id' className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt='client' className='sm:w-[192] w-[100px] object-contain' />
        </div>
      ))}
    </div>
  </section>
)

export default Clients