const examenRoutes = [
  {
    path: '/test',
    component: () => import('../views/examen/PanelBase.vue'),
    children: [
      {
        path: '',
        name: 'examen',
        component: () => import('../views/examen/QuestionsPage.vue')
      },
      {
        path: 'results',
        name: 'resultado',
        component: () => import('../views/examen/ResultsPage.vue')
      }
      
    ]
  }
]

export default examenRoutes