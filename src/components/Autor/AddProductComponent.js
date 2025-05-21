import React, { useState } from 'react';
import ProductService from '../ProductService';
import { useNavigate } from 'react-router-dom';

const AddProductComponent = () => {
    const [nome, setNome] = useState('');
    const [pais, setPais] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicio, setdataInicio] = useState('');
    const [dataFim, setdataFim] = useState('');
    
    
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
                                    <label> pais: </label>
                                    <input type="String" name="pais" className="form-control"
                                           value={pais} onChange={(e) => setData(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Descrição: </label>
                                    <input placeholder="Descrição" name="descricao" className="form-control"
                                           value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> dataInicio: </label>
                                    <input type = "date" placeholder="Data de Inicio" name="Data de Inicio" className="form-control"
                                           value={tipo} onChange={(e) => setTipo(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> dataFim: </label>
                                    <input type = "date" placeholder="Data de Parada" name="Data de Parada" className="form-control"
                                           value={tipo} onChange={(e) => setTipo(e.target.value)} />
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