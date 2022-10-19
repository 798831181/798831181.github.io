
module.exports = {
    title:"s-note",
    base: '/', 
    lang: 'en-US',
    themeConfig:{
      nav:[
        {text:'index', link:'/index'}
      ],
      sidebar:[
        {
            text:'Quick Start',
            collapsible: true,
            items:[
              {
                text:'站点介绍', 
                link:'/quick-start/'
              }
            ]
        },
        {
          text:'JAVA核心技术',
          collapsible: true,
          items:[
            {
              text:'介绍',
              link:'/core-java/'
            },
            {
              text:'java防止反编译技术方案与实现',
              link:'/core-java/anti-decompile.html'
            }
          ]
        },
        {
          text:'框架和工具',
          collapsible: true,
          items:[
            {
              text:'easy excel',
              link:'/third-part/easy-excel.html'
          
        },{
          text: 'Redis',
          collapsible:true,
          items:[
            {
              text:'Redis',
              link:'/redis/'
            }
          ]
        }]}
      ]
    }
}
