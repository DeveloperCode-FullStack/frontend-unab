import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import Swal from 'sweetalert2';

declare var jQuery: any;
declare var $: any;

@Injectable({
    providedIn: 'root'
})
export class HelperService {

    constructor(private router: Router, public _location: Location, private _toast: ToastrService) {

    }

    redirectApp(url: String) {
        this.router.navigate([url]);
    }

    onClickBack() {
        this._location.back();
    }

    createDatatable() {
        setTimeout(() => {
            $('#table').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": false,
                "responsive": true,
                "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
                }
            })
        }, 500);
    }

    destroyDatatable() {
        $("#table").DataTable().destroy();
    }

    confirmDelete(callback) {
        Swal.fire({
            title: '¿Está seguro de realizar esta acción?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F8E12E',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminelo!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                callback();
            }
        })
    }

    showMessage(type: string, message: string, title: string = "Mensaje del sistema") {
        switch (type) {
            case MessageType.ERROR:
                this._toast.error(message, title);
                break;
            case MessageType.SUCCESS:
                this._toast.success(message, title);
                break;
            case MessageType.WARNING:
                this._toast.warning(message, title)
            default:
                break;
        }
    }
}

export const MessageType = {
    SUCCESS: "S",
    WARNING: "W",
    ERROR: "E"
}