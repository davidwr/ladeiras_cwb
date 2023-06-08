export function getHumanReadableLevel(levelValue) {
  const levels = {
    BEGINNER: 'Iniciante',
    INTERMEDIATE: 'Intermediário',
    ADVANCED: 'Avançado'
  }

  return levels[levelValue]
}

export function getHumanReadableCategory(categoryValue) {
  const categories = {
    ladeira: 'Ladeira',
    trajeto: 'Trajeto'
  }

  return categories[categoryValue]
}
