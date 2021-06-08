export const USERS = {
  'status': 'OK',
  'message': 'List of users',
  'data': [
      {
          'id': 1,
          'name': 'Admin',
          'surname': null,
          'documentType': null,
          'documentNumber': null
      },
      {
          'id': 2,
          'name': 'Carles',
          'surname': 'Saumell',
          'documentType': {
              'id': 1,
              'name': 'NIF'
          },
          'documentNumber': '47637487W',
          'wallets': [
              {
                  'id': 2,
                  'name': 'Ahorros',
                  'description': 'Ahorros personales',
                  'coins': 2000,
                  'user': {
                      'id': 2,
                      'name': 'Carles',
                      'surname': 'Saumell',
                      'documentType': {
                          'id': 1,
                          'name': 'NIF'
                      },
                      'documentNumber': '47637487W'
                  }
              },
              {
                  'id': 1,
                  'name': 'Personal',
                  'description': 'Cuenta de uso diario',
                  'coins': 0,
                  'user': {
                      'id': 2,
                      'name': 'Carles',
                      'surname': 'Saumell',
                      'documentType': {
                          'id': 1,
                          'name': 'NIF'
                      },
                      'documentNumber': '47637487W'
                  }
              }
          ]
      },
      {
          'id': 3,
          'name': 'Daniel',
          'surname': 'Grobas',
          'documentType': {
              'id': 1,
              'name': 'NIF'
          },
          'documentNumber': '17257780Y',
          'wallets': [
              {
                  'id': 3,
                  'name': 'Trabajo',
                  'description': 'Ahorros del trabajo',
                  'coins': 16000,
                  'user': {
                      'id': 3,
                      'name': 'Daniel',
                      'surname': 'Grobas',
                      'documentType': {
                          'id': 1,
                          'name': 'NIF'
                      },
                      'documentNumber': '17257780Y'
                  }
              }
          ]
      },
      {
          'id': 4,
          'name': 'Pagantis',
          'surname': 'Group',
          'documentType': {
              'id': 1,
              'name': 'NIF'
          },
          'documentNumber': '33517008M',
          'wallets': [
              {
                  'id': 5,
                  'name': 'Departamento Comercial',
                  'description': 'Ingresos del departamento comercial',
                  'coins': 50000,
                  'user': {
                      'id': 4,
                      'name': 'Pagantis',
                      'surname': 'Group',
                      'documentType': {
                          'id': 1,
                          'name': 'NIF'
                      },
                      'documentNumber': '33517008M'
                  }
              },
              {
                  'id': 4,
                  'name': 'Empresa',
                  'description': 'Ingresos empresariales',
                  'coins': 150000,
                  'user': {
                      'id': 4,
                      'name': 'Pagantis',
                      'surname': 'Group',
                      'documentType': {
                          'id': 1,
                          'name': 'NIF'
                      },
                      'documentNumber': '33517008M'
                  }
              }
          ]
      }
  ]
};

export const USER = {
  'status': 'OK',
  'message': 'User',
  'data': {
      'id': 2,
      'name': 'Carles',
      'surname': 'Saumell',
      'documentType': {
          'id': 1,
          'name': 'NIF'
      },
      'documentNumber': '47637487W',
      'wallets': [
          {
              'id': 1,
              'name': 'Personal',
              'description': 'Cuenta de uso diario',
              'coins': 0,
              'user': {
                  'id': 2,
                  'name': 'Carles',
                  'surname': 'Saumell',
                  'documentType': {
                      'id': 1,
                      'name': 'NIF'
                  },
                  'documentNumber': '47637487W'
              }
          },
          {
              'id': 2,
              'name': 'Ahorros',
              'description': 'Ahorros personales',
              'coins': 2000,
              'user': {
                  'id': 2,
                  'name': 'Carles',
                  'surname': 'Saumell',
                  'documentType': {
                      'id': 1,
                      'name': 'NIF'
                  },
                  'documentNumber': '47637487W'
              }
          }
      ]
  }
};
