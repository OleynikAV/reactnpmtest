import React,{useState} from 'react';
import '../../App.css'
import './table.css'

const Index = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [id, setId] = useState('')

    const [store, setStore] = useState([
        { id: 1 , name: 'Товар 1', price: 1000},
        { id: 2 , name: 'Товар 2', price: 2000},
        { id: 3 , name: 'Товар 3', price: 3000},
        { id: 4 , name: 'Товар 4', price: 4000},
        { id: 5 , name: 'Товар 5', price: 5000},
        { id: 6 , name: 'Товар 6', price: 6000},
        { id: 7 , name: 'Товар 7', price: 7000},
        { id: 8 , name: 'Товар 8', price: 8000},
        { id: 9 , name: 'Товар 9', price: 9000},
        { id: 10 , name: 'Товар 10', price: 10000}
    ]);

    const remove =  (targetId) => {
        setStore(prevState => prevState.filter(item => item.id !== targetId));
    }
    const update = (targetId) =>{
        setStore((prevState) => prevState.map((item) => (item.id == targetId ? {id, name, price} : item)));
        resetInput()
    }

    const create =  (e) => {
        const items = { id, name, price }
        setStore([...store, items])
        resetInput()

    }

    const resetInput = () => {
        setId('')
        setName('')
        setPrice('')

    }
    const renderItem = ({id, name, price})=>(
        <tr key={id}>
            <td  className='products__id'>
                <input
                    type='text'
                    defaultValue={id}
                    onChange={e => setId(e.target.value)}
                />
            </td>
            <td  className='products__id'>
                <input
                    type='text'
                    defaultValue={name}
                    onChange={e => setName(e.target.value)}
                />
            </td>
            <td  className='products__id'>
                <input
                    type='text'
                    defaultValue={price}
                    onChange={e => setPrice(e.target.value)}/>
            </td>
            <td>
                <button className='products__btn products__btn-remove'
                        onClick={()=> remove(id)}
                >Удалить</button>

                <button className='products__btn products__btn-update'
                        onClick={()=> update(id, name, price)}
                >Изменить</button>
            </td>
        </tr>

    )

    return (
        <div className='container-flex'>
            <h1>{store.length ? 'Список товаров' : 'Данных нет'}</h1>
            <table className='products'>
                <thead>
                <tr className='products__tr'>
                    <th className='products__th'>#</th>
                    <th className='products__th'>Название</th>
                    <th className='products__th'>Цена</th>
                    <th className='products__th'>Действия</th>
                </tr>
                </thead>

                <tbody>{store.map(renderItem)}</tbody>

                <tfoot>
                <tr>
                    <td><input onChange={e => setId(e.target.value)}  type="text" placeholder={'Id'}/></td>
                    <td><input onChange={e => setName(e.target.value)} type="text" placeholder={'Name'}  /></td>
                    <td><input onChange={e => setPrice(e.target.value)} type="text" placeholder={'Price'} /></td>
                    <td>
                        <button type={'button'}
                                className='products__btn products__btn-add'
                                onClick={create}
                        >
                            Добавить
                        </button>
                    </td>
                </tr>

                </tfoot>
            </table>

        </div>
    );
}

export default Index;