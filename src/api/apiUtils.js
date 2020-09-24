export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
}
