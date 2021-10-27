import { Component } from "react";
import s from "../ContactList/ContactList.module.css"
export class ContactList extends Component {
    render() {
        return <section>
            
        <ul className={s.list}>
            {this.props.contacts.map((el) =>
                <li key={el.id}>{el.name}: {el.number}
                    <button
                        type="button"
                        id={el.id}
                        onClick={this.props.onDeleteContacts}
                    >Delete</button>
                </li>
        )}
    </ul>
    </section>
}
}