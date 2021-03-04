import c from './users.module.css';
import axios from "axios";
import defaultPhoto from './../../assets/default-avatar.png';

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });

        // props.setUsers([
        //     {
        //         id: 1,
        //         name: 'Pidorg Pidors',
        //         status: 'I like suck dicks',
        //         imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
        //         location: {country: 'RU', city: 'Moscow'},
        //         followed: true
        //     },
        //     {
        //         id: 2,
        //         name: 'Alfa Samec',
        //         status: 'I like suck dicks too',
        //         imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
        //         location: {country: 'UK', city: 'Kiev'},
        //         followed: false
        //     },
        //     {
        //         id: 3,
        //         name: 'Sosatel',
        //         status: 'WTF??!!',
        //         imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
        //         location: {country: 'EN', city: 'London'},
        //         followed: false
        //     },
        //     {
        //         id: 4,
        //         name: 'Huebla',
        //         status: 'This is my dick',
        //         imgSrc: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
        //         location: {country: 'RU', city: 'Saint-Petersburg'},
        //         followed: false
        //     }
        // ]);
    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <img className={c.userPhoto}
                                     src={user.photos.small != null ? user.photos.small : defaultPhoto}/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </div>)
            }
        </div>
    );
}

export default Users;