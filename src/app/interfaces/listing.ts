export interface ListingFAQ {
    question: string,
    answer: string
}

export interface Listing {
    name: string,
    description?: string,
    includes?: string,
    recommendations?: string,
    notes?: string,
    faqs?: ListingFAQ[]
}
