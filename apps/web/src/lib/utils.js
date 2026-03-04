export function formatCurrency(n){
  if(n==null) return ''
  return `$${Number(n).toFixed(2)}`
}

export function nowIso(){ return new Date().toISOString() }
