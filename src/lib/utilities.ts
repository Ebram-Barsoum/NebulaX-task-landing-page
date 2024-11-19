export function formatCurrency(money: number, percision: number = 0): string {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: percision,
        maximumFractionDigits: percision,
    });

    return formatter.format(money);
}