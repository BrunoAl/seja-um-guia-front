import styled from 'styled-components'

export const TableContainer = styled.table `
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin-top: 20px;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  color: #ef3e68;

  tr {
    background: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  th, td {
    padding: .625em;
    text-align: center;
  }

  th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
`
export const MainTable = styled.section `
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 80px;
  margin-top: 50px;
  padding: 25px 40px;
  background-color: #ffffff;
  border-radius: 6px;
`
