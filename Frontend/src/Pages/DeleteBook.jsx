import BackButton from "../Component/BackButton.jsx";
import Load from "../Component/Load.jsx";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";

function DeleteBook() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteBook = async () => {
        setLoading(true);
        try {
            const response = await axios.delete(`http://localhost:5001/books/${id}`);
            navigate('/');
        } catch (error) {
            setLoading(false);
            console.error("fetching book data", error);
            alert("An error happend .check your console");
        } finally {
            setLoading(false);
        };



    };



    return (
        <div className="container mt-4 pt-5">
            <h1 className="text-center my-4">Delete Book</h1>
            {loading && <Load />}
            <div className="card mx-auto bg-info" style={{ maxWidth: "600px" }}>
                <div className="card-body text-center">
                    <h3 className="card-title mb-4">Are you sure you want to delete this book?</h3>
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-danger "
                            onClick={handleDeleteBook}>
                            Yes, Delete it
                        </button>
                        <BackButton />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeleteBook
