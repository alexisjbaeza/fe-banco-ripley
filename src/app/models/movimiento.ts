export interface MovimientoModel {
    fecha: Date;
    cuenta?: String;
    monto: number;
    tipo: String;
    cuenta_origen?: String;
    cuenta_destino?: String;
}