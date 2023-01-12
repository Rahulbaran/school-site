/* utils */
import currentYear from "../../utils/CurrentYear";

function Copyright() {
  return (
    <div className="copyright-container">
      <p>&copy;All rights reserved, Prayaas India 2008-{currentYear()}</p>
    </div>
  );
}

export default Copyright;
