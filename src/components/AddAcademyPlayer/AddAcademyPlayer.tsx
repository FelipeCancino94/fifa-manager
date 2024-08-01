import React from "react";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function AddAcademyPlayer() {

  const MySwal = withReactContent(Swal);
  const form = () => {
    return (
      <div className="form">
        <div className="row flex justify-between">
          <div className="form-group flex-initial w-50">
            <label htmlFor="name" className="text-left w-full block">Nombre</label>
            <input type="text" id="name" className="border-2 border-x-0 border-y-[#091442] py-3 px-2" />
          </div>
          <div className="form-group flex-initial w-50">
            <label htmlFor="last_name" className="text-left w-full block">Apellido</label>
            <input type="text" id="last_name" className="border-2 border-x-0 border-y-[#091442] py-3 px-2" />
          </div>
        </div>
        <div className="row flex justify-between">
          <div className="form-group flex-initial w-50">
            <label htmlFor="general" className="text-left w-full block">General</label>
            <input type="number" id="general" className="border-2 border-x-0 border-y-[#091442] py-3 px-2" />
          </div>
          <div className="form-group flex-initial w-50">
            <label htmlFor="potential" className="text-left w-full block">Potencial</label>
            <input type="text" id="potential" className="border-2 border-x-0 border-y-[#091442] py-3 px-2" />
          </div>
        </div>
      </div>
    )
  };

  const showModalForm = () => {
    MySwal.fire({
      title: <p>Añadir nuevo jugador</p>,
      html: form(),
      confirmButtonText: 'Guardar',
      confirmButtonColor: '#091442',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: 'rgb(148 163 184)',
      icon: 'info'
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: 'Guardando...',
          icon: 'warning',
          didOpen: () => {
            MySwal.showLoading()
            // Ejecutar aca la funcion para guardar el formulario, luego crear otro MySwal con la confirmacion de guardado y recargar la pagina
          },
        })
      }
    });
  }

  return (
    <>
      <button className="border bg-white p-5 w-full mt-5">
        <span className="text-3xl text-[#091442]" onClick={ () => showModalForm() }>Add academy player</span>
      </button>
    </>
  )
}

export default AddAcademyPlayer;