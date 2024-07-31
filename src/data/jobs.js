const jobs = [
    {
        id: '16FF-4977-BD35',
        title: 'Jefe Desarrollador Net',
        salary: '$34,000 - $38,000 Mensual',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Cuauhtemoc, México',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Híbrido' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Lost Sys" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Programación Orientada a Objetos / Dependency Injection / Unit Testing' },
                { value: 'C# / RESTful APIS / ASP .NET CORE' },
                { value: 'MVC, Identity Server' },
                { value: 'SQL Server / Stored Procedure / Trigger' },
                { value: 'HTML / CSS / JavaScript' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
    {
        id: '8EA4-4EB8-8892',
        title: 'Desarrollador Net',
        salary: '$25,000 - $28,000 Mensual',
        benefits: ['Prestaciones de ley'],
        company: 'Confidencial',
        location: 'GAM, México',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Remoto' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Impulsora Mexico" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
            ],
            profile: [
                { value: 'Programación Orientada a Objetos / Dependency Injection / Unit Testing' },
                { value: 'C# / RESTful APIS / ASP .NET CORE' },
                { value: 'SQL Server / Stored Procedure / Trigger' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
            ],
        }
    },
    {
        id: '465E-4A07-9C7A',
        title: 'Net SQL Developer',
        salary: '$34,000 - $38,000 Mensual',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Cuauhtemoc, México',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: '' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Remoto' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Lost Sys" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Experiencia en Mantenimiento de código' },
                { value: 'C# / RESTful APIS / ASP .NET CORE' },
                { value: 'MVC, Identity Server' },
                { value: 'SQL Server / Stored Procedure / Trigger' },
                { value: 'HTML / CSS / JavaScript' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
    {
        id: '0809-47C1-9C48',
        title: '.NET Full Stack Developer',
        salary: '$34,000 - $38,000 Mensual',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Impulsora Mexico',
        location: 'Cuauhtemoc, México',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: '' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Híbrido' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Impulsora Mexico" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Experiencia en Mantenimiento de código' },
                { value: 'Diseño de Bases de Datos (SQL)' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
    {
        id: '7F03-4F9C-B6D3',
        title: 'Instructor de capacitación ASP-NET',
        salary: '$12,000 - $15,000 Mensual',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Cuauhtemoc, México',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Temporal' },
                { name: 'Horario', value: 'Medio tiempo' },
                { name: 'Espacio de trabajo', value: 'Desde casa' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Lost Sys' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Programación Orientada a Objetos / Dependency Injection / Unit Testing' },
                { value: 'C# / RESTful APIS / ASP .NET CORE' },
                { value: 'MVC, Identity Server' },
                { value: 'SQL Server / Stored Procedure / Trigger' },
                { value: 'HTML / CSS / JavaScript' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
    {
        id: 'D5EF-4381-848A',
        title: 'Software Engineer IV .NET',
        salary: 'Sueldo no mostrado por la empresa',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Monterrey, NL',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Remoto' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Lost Sys" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Programación Orientada a Objetos / Dependency Injection / Unit Testing' },
                { value: 'C# / RESTful APIS / ASP .NET CORE' },
                { value: 'MVC, Identity Server' },
                { value: 'SQL Server / Stored Procedure / Trigger' },
                { value: 'HTML / CSS / JavaScript' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Fondo de ahorro.' },
                { value: 'Plan de carrera.' },
                { value: 'Prestaciones superiores a las de la ley.' },
            ],
        }
    },
    {
        id: '8AA0-492E-8848',
        title: 'Desarrollador .NET JR',
        salary: 'Sueldo no mostrado por la empresa',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Monterrey, NL',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Presencial' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Lost Sys" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Lenguaje de programación C#' },
                { value: 'Framework Angular (Indispensable)'},
                { value: 'MVC' },
                { value: 'SQL Server' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
    {
        id: 'A641-4ABB-8AA8',
        title: 'Desarrollador Full Stack .NET (Vue/Core)',
        salary: '$34,000 - $38,000 Mensual',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Santa Fe, México',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Remoto' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Lost Sys" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Programación Orientada a Objetos / Dependency Injection / Unit Testing' },
                { value: 'C# / RESTful APIS / ASP .NET CORE' },
                { value: 'MVC, Identity Server' },
                { value: 'SQL Server / Stored Procedure / Trigger' },
                { value: 'HTML / CSS / JavaScript' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
    {
        id: 'DAEA-4606-B819',
        title: 'Desarrollador .NET 100% presencial',
        salary: 'Sueldo no mostrado por la empresa',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Zapopan, Jalisco',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Presencial' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Lost Sys" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Programación Orientada a Objetos / Dependency Injection / Unit Testing' },
                { value: 'C# / RESTful APIS / ASP .NET CORE' },
                { value: 'MVC, Identity Server' },
                { value: 'SQL Server / Stored Procedure / Trigger' },
                { value: 'HTML / CSS / JavaScript' },
                { value: 'Manejo de GIT' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
    {
        id: '912A-4EFB-A06D',
        title: 'Desarrollador Java',
        salary: '$34,000 - $38,000 Mensual',
        benefits: ['Prestaciones de ley', 'Prestaciones superiores a las de ley', 'Plan de carrera y crecimiento'],
        company: 'Lost Sys',
        location: 'Guadalajara, Jalisco',
        details: {
            about: [
                { name: 'Categoria', value: 'Tecnologías de la Información - Sistemas' },
                { name: 'Subcategoria', value: 'Consultoría IT' },
                { name: 'Educación mínima requerida', value: 'Universitario titulado' },
            ],
            detail: [
                { name: 'Contratación', value: 'Permanente' },
                { name: 'Horario', value: 'Tiempo completo' },
                { name: 'Espacio de trabajo', value: 'Híbrido' }
            ],
            description: [
                { name: 'Acerca de la empresa', value: 'Empresa: "Lost Sys" es una empresa líder en el sector de tecnologías de la información, especializada en el desarrollo de software y soluciones innovaciones para sus clientes.Valoramos el talento y la creatividad de nuestros empleados.' }
            ],
            responsibilities: [
                { value: 'Diseñar, desarrollar y mantener aplicaciones utilizando la tecnología NET.' },
                { value: 'Colaborar con el equipo de desarrollo en la implementación de soluciones.' },
                { value: 'Realizar pruebas de software y asegurar la calidad del producto final.' },
            ],
            profile: [
                { value: 'Java 8, Spring Boot, (APX)' },
                { value: 'Maven, RestFull, (API Microservice)' },
                { value: 'GIT, Jenkis, JUnit, Postman, Sonar, Bitbuket' },
            ],
            benefits: [
                { value: 'Contratación permanente a tiempo completo en modalidad híbrida.' },
                { value: 'Oportunidades de capacitación y desarrollo profesional.' },
                { value: 'Ambiente de trabajo dinámico y colaborativo.' },
            ],
        }
    },
]

export default jobs