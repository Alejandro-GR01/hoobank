import styles from '../style'
import {clients} from "../constants"

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}  lg:min-w-[192px] min-w=[120px]`}>
            <img src={client.logo} alt="client_logo" className= 'lg:w-[192px] w-[100px]' />
          </div>
        ))}

      </div>

    </section>
  )


export default Clients