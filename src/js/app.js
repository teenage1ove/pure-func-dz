export default function main(obj) {
    if (typeof obj !== 'object') {
        return 'error';
    }

    if (!obj.name || !obj.health) {
        return 'error';
    }

    if (obj.health > 50) {
        return 'healthy';
    } else if (obj.health < 50 && obj.health > 15) {
        return 'wounded';
    } else if (obj.health < 15) {
        return 'critical';
    }
}