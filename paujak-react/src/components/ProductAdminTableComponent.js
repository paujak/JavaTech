import React from 'react'

function ProductAdminTableComponent(props) {
    return (
        <main className="container">
          <div className="row mt-5">
            <table className="table table-sm col-10 mx-auto">
              <tbody>
               <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
                {props.products.map((item) => {
                  return (
                  <tr key={item.id}>
                    <td className="align-middle">{item.id}</td>
                    <td className="align-middle">{item.title}</td>
                    <td className="align-middle">{item.price}</td>
                    <td className="align-middle">{item.quantity}</td>
                    <td className="align-middle text-right">
                    <button
                        className="btn btn-primary btn-sm py-1 mx-1"
                        onClick={props.edit.bind(this, item.id)}
                      >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger btn-sm py-1 mx-1 "
                        onClick={props.delete.bind(this, item.id)}
                      >
                        Delete
                    </button>
                    </td>
                  </tr>)
                }
                )
              }
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-10 mx-auto">
            <button className="btn btn-primary" onClick={props.add}>
              Add new product
            </button>
          </div>
          </div>
        </main>
    );
}

export default ProductAdminTableComponent
