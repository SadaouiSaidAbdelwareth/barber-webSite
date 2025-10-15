import React, { useContext } from 'react';
import { SiteDataContext } from '../contexts/SiteDataContext';
import { Page } from '../App';

interface DashboardPageProps {
  navigate: (page: Page) => void;
}

const EditableField: React.FC<{
    label: string;
    path: string;
    value: any;
    type?: 'text' | 'textarea' | 'number';
    rows?: number;
}> = ({ label, path, value, type = 'text', rows = 1 }) => {
    const context = useContext(SiteDataContext);
    if (!context) return null;
    const { updateNestedData } = context;

    const Component = type === 'textarea' ? 'textarea' : 'input';

    return (
        <div>
            <label htmlFor={path} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            <Component
                id={path}
                type={type}
                rows={rows}
                value={value || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => updateNestedData(path, e.target.value)}
                className="block w-full px-3 py-2 bg-gray-50 dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold sm:text-sm"
            />
        </div>
    );
};

const Section: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-serif font-bold text-brand-gold mb-6 border-b-2 border-brand-gold/50 pb-3">{title}</h3>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

// FIX: Updated MultiLangInput to correctly construct data paths for different nested structures.
const MultiLangInput: React.FC<{
    label: string;
    basePath: string;
    data: any;
    isTextArea?: boolean;
}> = ({ label, basePath, data, isTextArea = false }) => {
    return (
        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="text-md font-semibold mb-3 text-gray-800 dark:text-gray-200">{label}</h4>
            <div className="space-y-3">
                <EditableField label="English" path={basePath ? `${basePath}.en.${data}` : `en.${data}`} value={get(siteData, basePath ? `${basePath}.en.${data}` : `en.${data}`)} type={isTextArea ? 'textarea' : 'text'} rows={isTextArea ? 3 : 1} />
                <EditableField label="Français" path={basePath ? `${basePath}.fr.${data}` : `fr.${data}`} value={get(siteData, basePath ? `${basePath}.fr.${data}` : `fr.${data}`)} type={isTextArea ? 'textarea' : 'text'} rows={isTextArea ? 3 : 1} />
                <EditableField label="العربية" path={basePath ? `${basePath}.ar.${data}` : `ar.${data}`} value={get(siteData, basePath ? `${basePath}.ar.${data}` : `ar.${data}`)} type={isTextArea ? 'textarea' : 'text'} rows={isTextArea ? 3 : 1} />
            </div>
        </div>
    );
};

const get = (obj: any, path: string) => path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
let siteData: any; // for MultiLangInput helper

const DashboardPage: React.FC<DashboardPageProps> = ({ navigate }) => {
    const context = useContext(SiteDataContext);

    if (!context) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const { siteData: currentSiteData, updateNestedData, addItem, deleteItem } = context;
    siteData = currentSiteData; // make it available to helper

    // FIX: Changed `template` type from `object` to `any` to allow adding strings (like image URLs) to arrays.
    const handleAddItem = (path: string, template: any) => {
        addItem(path, template);
    };

    const handleDeleteItem = (path: string, index: number) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            deleteItem(path, index);
        }
    };

    return (
        <div className="py-20 pt-32 min-h-screen bg-gray-100 dark:bg-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 dark:text-white">
                        Admin Dashboard
                    </h2>
                    <button onClick={() => navigate('home')} className="text-brand-gold hover:underline">
                        &larr; Back to Home
                    </button>
                </div>

                <Section title="Hero Section">
                    <EditableField label="Background Image URL" path="heroImage" value={siteData.heroImage} />
                    <MultiLangInput label="Subtitle" basePath="" data="hero.subtitle" />
                    <MultiLangInput label="Title" basePath="" data="hero.title" />
                    <MultiLangInput label="Description" basePath="" data="hero.description" isTextArea />
                </Section>

                <Section title="Services Section">
                    {siteData.en.services.items.map((_: any, index: number) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative">
                             {/* FIX: Corrected path for deleting items. */}
                             <button onClick={() => handleDeleteItem('en.services.items', index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold">&times;</button>
                             <h4 className="font-bold mb-2">Service #{index + 1}</h4>
                             <div className="space-y-4">
                                {/* FIX: Corrected path and value for editing image URL. */}
                                <EditableField label="Image URL" path={`en.services.items.${index}.imageUrl`} value={siteData.en.services.items[index].imageUrl} />
                                {/* FIX: Corrected basePath for MultiLangInput. */}
                                <MultiLangInput label="Name" basePath={`en.services.items.${index}`} data="name" />
                                <MultiLangInput label="Description" basePath={`en.services.items.${index}`} data="description" isTextArea />
                                <MultiLangInput label="Price" basePath={`en.services.items.${index}`} data="price" />
                             </div>
                        </div>
                    ))}
                     {/* FIX: Corrected path for adding items. */}
                     <button onClick={() => handleAddItem('en.services.items', { imageUrl: 'https://via.placeholder.com/600x400', en: { name: "New Service", description: "Description", price: "0 DZD" }, ar: { name: "خدمة جديدة", description: "الوصف", price: "0 د.ج" }, fr: { name: "Nouveau Service", description: "Description", price: "0 DZD" } })} className="w-full bg-brand-gold text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                        + Add Service
                    </button>
                </Section>
                
                <Section title="Gallery">
                     {siteData.galleryImages.map((image: string, index: number) => (
                         <div key={index} className="flex items-center space-x-4">
                            <img src={image} alt={`Gallery item ${index}`} className="w-20 h-20 object-cover rounded-md" />
                            <div className="flex-grow">
                                <EditableField label={`Image URL #${index + 1}`} path={`galleryImages.${index}`} value={image} />
                            </div>
                            <button onClick={() => handleDeleteItem('galleryImages', index)} className="text-red-500 hover:text-red-700 font-bold p-2">&times;</button>
                         </div>
                     ))}
                     <button onClick={() => handleAddItem('galleryImages', 'https://via.placeholder.com/600x400')} className="w-full bg-brand-gold text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                        + Add Image
                    </button>
                </Section>

                <Section title="Testimonials Section">
                    {siteData.en.testimonials.items.map((_: any, index: number) => (
                        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative">
                             {/* FIX: Corrected path for deleting items. */}
                             <button onClick={() => handleDeleteItem('en.testimonials.items', index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold">&times;</button>
                             <h4 className="font-bold mb-2">Testimonial #{index + 1}</h4>
                             <div className="space-y-4">
                                {/* FIX: Corrected path and value for editing image URL. */}
                                <EditableField label="Client Image URL" path={`en.testimonials.items.${index}.imageUrl`} value={siteData.en.testimonials.items[index].imageUrl} />
                                {/* FIX: Corrected basePath for MultiLangInput. */}
                                <MultiLangInput label="Quote" basePath={`en.testimonials.items.${index}`} data="quote" isTextArea/>
                                <MultiLangInput label="Name" basePath={`en.testimonials.items.${index}`} data="name" />
                             </div>
                        </div>
                    ))}
                     {/* FIX: Corrected path for adding items. */}
                     <button onClick={() => handleAddItem('en.testimonials.items', { imageUrl: 'https://randomuser.me/api/portraits/lego/1.jpg', en: { quote: "Amazing!", name: "New Client" }, ar: { quote: "رائع!", name: "زبون جديد" }, fr: { quote: "Incroyable !", name: "Nouveau Client" }})} className="w-full bg-brand-gold text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                        + Add Testimonial
                    </button>
                </Section>
            </div>
        </div>
    );
};

export default DashboardPage;
