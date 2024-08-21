"use client"
import { fetchDepartments, departmentSelector } from '@/src/store/slices/departmentSlice'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/src/store/store'


type Props = {}

const Products = (props: Props) => {
  const departmentReducer = useSelector(departmentSelector)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchDepartments())
  }, [])

  return (
    <div>
      {/* <ul>
        {productReducer.products.map((product) => (
          <li key={product.id}>
            {product.productName}
          </li>
        ))}
      </ul> */}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
          </tr>
        </thead>
        <tbody>
          {departmentReducer.departments.map((department) => (
            <tr key={department.id}>
              <td>{department.productName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default Products