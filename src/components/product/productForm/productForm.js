import React from 'react';

export class ProductForm extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <h2>Add Product</h2>
                    <p>Pls provide details of your product here</p>
                    <form className="form-group" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input onChange={this.handleChange} type="text" name="name" placeholder="Name" className="form-control"></input>
                        <label>Description</label>
                        <input onChange={this.handleChange} type="text" name="description" placeholder="Description" className="form-control"></input>
                        <label>Category</label>
                        <input onChange={this.handleChange} type="text" name="category" placeholder="Category" className="form-control"></input>
                        <label>Brand</label>
                        <input onChange={this.handleChange} type="text" name="brand" placeholder="Brand" className="form-control"></input>
                        <label>Color</label>
                        <input onChange={this.handleChange} type="text" name="color" placeholder="Color" className="form-control"></input>
                        <label>Tags</label>
                        <input onChange={this.handleChange} type="text" name="tags" placeholder="Tags" className="form-control"></input>
                        <label>ManuDate</label>
                        <input onChange={this.handleChange} type="Date" name="manuDate" placeholder="ManuDate" className="form-control"></input>
                        <label>ExpiryDate</label>
                        <input onChange={this.handleChange} type="Date" name="expiryDate" placeholder="ExpiryDate" className="form-control"></input>
                        <br></br>
                        <input type="checkbox" name="discountedItem" ></input>
                        <label>Discounted Item</label><br></br>
                        <label>Discount Type</label>
                        <input onChange={this.handleChange} type="text" name="discountType" placeholder="Discount Type" className="form-control"></input>
                        <label>Discount</label>
                        <input onChange={this.handleChange} type="text" name="discount" placeholder="Discount" className="form-control"></input><br></br>
                        <input type="checkbox" name="warrantyItem"></input>
                        <label>Warranty Item</label><br></br>
                        <label>Warranty Period</label>
                        <input onChange={this.handleChange} type="text" name="warrantyPeriod" placeholder="Warranty Period" className="form-control"></input>
                        <br></br>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}