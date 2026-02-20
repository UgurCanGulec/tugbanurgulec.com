import { supabase } from '../web/supabaseClient';

export const fetchComments = async () => {
    try {
        const { data, error } = await supabase
            .from('comment')
            .select('comment_id, user_name, comment_text')
            .eq('is_approved', true) 
        if (error) throw error;
        return data;
    } catch (error) {
        console.error('Yorumlar çekilirken hata:', error.message);
        return [];
    }
};