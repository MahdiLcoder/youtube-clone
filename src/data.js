export const API_KEY = 'AIzaSyC2w7AIpanEt_MgDpHyvImmVliHzbL_5Gk';

export function valueConverter(value) {
	if (value >= 1000000) {
		return `${Math.floor(value / 1000000)}M`
	}else if (value >= 1000) {
		return `${Math.floor(value / 1000)}K`
	}else{
		return value
	}
	
}