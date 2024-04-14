package com.mta.bandway.core.domain.car.auto.correct;

public enum CarCategory {
    small("carCategory::small"),
    medium("carCategory::medium"),
    large("carCategory::large"),
    premium("carCategory::premium"),
    carriers("carCategory::carriers"),
    suvs("carCategory::suvs");

    private final String displayName;

    CarCategory(String displayName) {
        this.displayName = displayName;
    }

    public static CarCategory fromDisplayName(String displayName) {
        for (CarCategory category : CarCategory.values()) {
            if (category.displayName.equalsIgnoreCase(displayName)) {
                return category;
            }
        }
        throw new IllegalArgumentException("No constant with displayName " + displayName + " found");
    }

    public String getDisplayName() {
        return displayName;
    }

}
