# bodega-project3


Registro/Inicio de Sesión de Usuario


| MÉTODO | ENDPOINT       | TOKEN | ROL   | DESCRIPCIÓN          | PARÁMETROS POST                                   | DEVUELVE             |
|--------|----------------|-------|-------|----------------------|---------------------------------------------------|----------------------|
| POST   | /auth/registro | -     | user  | Registro de Usuario  | nombre, email, contraseña, rol, numero_telefono   | { token: token } |
| POST   | /auth/login    | -     | user  | Inicio de Sesión     | email, contraseña                                 | { token: token }     |


Usuarios


| MÉTODO | ENDPOINT          | TOKEN | ROL    | DESCRIPCIÓN            | PARÁMETROS POST                               | DEVUELVE                          |
|--------|-------------------|-------|--------|------------------------|-----------------------------------------------|-----------------------------------|
| GET    | /usuario          | SÍ    | admin  | Obtener Todos los Usuarios | parámetros de consulta                        | [{usuario}]                       |
| GET    | /usuario/perfil   | SÍ    | user   | Obtener Perfil Propio  |                                               | {usuario}                         |
| GET    | /usuario/:userId  | SÍ    | admin   | Obtener un Usuario     |                                               | {usuario}                         |
| POST   | /usuario          | SÍ    | admin  | Crear un Usuario       | userName, email, contraseña, país, fechaNacimiento, teléfono | {usuario}                 |
| PUT    | /usuario/perfil   | SÍ    | user   | Actualizar Perfil Propio | userName, email, contraseña, país, fechaNacimiento, teléfono | {mensaje: 'Perfil actualizado'}  |
| PUT    | /usuario/contraseña | SÍ  | user   | Restablecer Contraseña | contraseñaAntigua, nuevaContraseña, repetirNuevaContraseña   | {mensaje: 'Contraseña actualizada'} |
| PUT    | /usuario/:userId  | SÍ    | admin  | Actualizar un Usuario  | userName, email, contraseña, país, fechaNacimiento, teléfono | {mensaje: 'Usuario actualizado'} |
| DELETE | /usuario/:userId  | SÍ    | admin  | Eliminar un Usuario    | userId                                        | {mensaje: 'Usuario eliminado'}    |
| DELETE | /usuario/perfil   | SÍ    | user   | Eliminar Perfil Propio |                                               | {mensaje: 'Perfil eliminado'}     |


Vinos


| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION               | POST PARAMS                        | RETURNS                       |
|--------|-----------------|-------|--------|---------------------------|------------------------------------|-------------------------------|
| GET    | /vinos          | SÍ    | user   | Lista todos los vinos     |                                    | [{vino}]                      |
| GET    | /vinos/:id      | SÍ    | user   | Obtiene detalles de un vino|                                   | {vino}                        |
| POST   | /vinos          | SÍ    | Owner  | Añade un nuevo vino       | nombre, año, tipo, descripción, precio, stock | {message: 'Vino añadido'} |
| PUT    | /vinos/:id      | SÍ    | Owner  | Actualiza un vino         | nombre, año, tipo, descripción, precio, stock | {message: 'Vino actualizado'}|
| DELETE | /vinos/:id      | SÍ    | Owner  | Elimina un vino           |                                    | {message: 'Vino eliminado'}   |


Bodegas

| MÉTODO | ENDPOINT        | TOKEN | ROL       | DESCRIPCIÓN              | PARÁMETROS POST           | DEVUELVE                       |
|--------|-----------------|-------|-----------|--------------------------|---------------------------|-------------------------------|
| GET    | /bodegas        | SÍ    | user      | Listar todas las bodegas | -                         | [{bodega}]                    |
| GET    | /bodegas/:id    | SÍ    | user      | Obtener una bodega       | -                         | {bodega}                      |
| POST   | /bodegas        | SÍ    | owner     | Crear una bodega       | nombre, direccion         | {bodega}                      |
| PUT    | /bodegas/:id    | SÍ    | owner     | Actualizar una bodega   | nombre, direccion         | {mensaje: 'Bodega actualizada'} |
| DELETE | /bodegas/:id    | SÍ    | owner     | Eliminar una bodega     | -                         | {mensaje: 'Bodega eliminada'} |



Reservas


| METHOD | ENDPOINT           | TOKEN | ROLE   | DESCRIPTION                | POST PARAMS                | RETURNS                         |
|--------|--------------------|-------|--------|----------------------------|----------------------------|---------------------------------|
| GET    | /reservas          | SÍ    | Admin  | Lista todas las reservas   |                            | [{reserva}]                     |
| POST   | /reservas          | SÍ    | user   | Permite hacer una reserva  | fechaHora, numeroPersonas  | {reserva}                       |
| GET    | /reservas/:id      | SÍ    | user   | Obtiene detalles reserva   |                            | {reserva}                       |
| PUT    | /reservas/:id      | SÍ    | user   | Actualiza una reserva      | fechaHora, numeroPersonas  | {message: 'Reserva actualizada'}|
| DELETE | /reservas/:id      | SÍ    | user   | Cancela una reserva        |                            | {message: 'Reserva cancelada'}  |


Tour

| MÉTODO | ENDPOINT       | TOKEN | ROL       | DESCRIPCIÓN               | PARÁMETROS POST                         | DEVUELVE                       |
|--------|----------------|-------|-----------|---------------------------|-----------------------------------------|-------------------------------|
| GET    | /tours         | SÍ    | user     | Listar todos los tours     | -                                       | [{tour}]                      |
| GET    | /tours/:id     | SÍ    | user     | Obtener detalles de un tour| -                                       | {tour}                        |
| POST   | /tours         | SÍ    | owner    | Crear un tour                 | franja_horaria, max_personas, id_bodega | {tour}                        |
| PUT    | /tours/:id     | SÍ    | owner    | Actualizar un tour            | franja_horaria, max_personas            | {mensaje: 'Tour actualizado'} |
| DELETE | /tours/:id     | SÍ    | owner    | Eliminar un tour              | -                                       | {mensaje: 'Tour eliminado'}   |
| GET    | /tours/:idowner | SÍ    | owner    | Listar todos mis tours      | -                                       | [{tour}]                      |



Pedidos

| METHOD | ENDPOINT        | TOKEN | ROLE   | DESCRIPTION                      | POST PARAMS                | RETURNS                         |
|--------|-----------------|-------|--------|----------------------------------|----------------------------|---------------------------------|
| POST   | /pedidos        | SÍ    | user   | Crea nuevo pedido desde carrito  |                            | {pedido}                        |
| GET    | /pedidos/:id    | SÍ    | user   | Muestra detalles de un pedido    |                            | {pedido}                        |
| PUT    | /pedidos/:id    | SÍ    | Admin  | Actualiza el estado de un pedido | estadoPedido               | {message: 'Pedido actualizado'} |
| DELETE | /pedidos/:id    | SÍ    | Admin  | Cancela un pedido                |                            | {message: 'Pedido cancelado'}   |


Comentarios y Calificaciones


| METHOD | ENDPOINT                       | TOKEN | ROLE   | DESCRIPTION                      | POST PARAMS                 | RETURNS                            |
|--------|--------------------------------|-------|--------|----------------------------------|-----------------------------|------------------------------------|
| POST   | /vinos/:id_vino/comentarios    | SÍ    | user| Permite comentar sobre un vino   | textoComentario             | {comentario}                        |
| GET    | /vinos/:id_vino/comentarios    | SÍ   | user  | Lista comentarios de un vino     |                             | [{comentario}]                      |
| POST   | /vinos/:id_vino/calificaciones | SÍ   | user| Permite calificar un vino        | puntuacion                  | {calificacion}                      |
| GET    | /vinos/:id_vino/calificaciones |SÍ   | user  | Lista calificaciones de un vino|                             | [{calificacion}]                    |
