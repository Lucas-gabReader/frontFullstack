import React, { useState } from 'react';
import ProductService from '../ProductService';
import { useNavigate } from 'react-router-dom';

const AddProductComponent = () => {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const navigate = useNavigate();

    const saveProduct = (e) => {
        e.preventDefault();
        const product = { nome, data, descricao, tipo, urlImage };
        ProductService.createProduct(product).then(() => {
            navigate('/products');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Product</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Nome: </label>
                                    <input placeholder="Nome" name="nome" className="form-control"
                                           value={nome} onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Data: </label>
                                    <input type="date" name="data" className="form-control"
                                           value={data} onChange={(e) => setData(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Descrição: </label>
                                    <input placeholder="Descrição" name="descricao" className="form-control"
                                           value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Tipo: </label>
                                    <input placeholder="Tipo" name="tipo" className="form-control"
                                           value={tipo} onChange={(e) => setTipo(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> URL da Imagem: </label>
                                    <input placeholder="URL da Imagem" name="urlImage" className="form-control"
                                           value={urlImage} onChange={(e) => setUrlImage(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveProduct}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductComponent;