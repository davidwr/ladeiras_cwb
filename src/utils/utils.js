export function getHumanReadableLevel(levelValue) {
  const levels = {
    BEGINNER: 'Iniciante',
    INTERMEDIATE: 'Intermediário',
    ADVANCED: 'Avançado'
  }

  if (typeof levelValue === 'object') {
    return levelValue
      .map(l => {
        return levels[l]
      })
      .join(' para ')
      .toString()
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

export function getHumanReadableDistance(distanceValue) {
  if (typeof distanceValue === 'string') {
    return distanceValue
  }

  return `${distanceValue}m`
}
