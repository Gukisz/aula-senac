package pokepookies.ui;

import javax.swing.DefaultListModel;

public class Pokemon extends javax.swing.JFrame {
    private pokepookies.pokemon.PokemonList pokePCList;
    private pokepookies.pokemon.PokemonList pokeBagList;
    
    private DefaultListModel<String> pokeBagModelList;
    private DefaultListModel<String> pokePCModelList;

    public Pokemon() {
        initComponents();
        
        this.pokeBagModelList = new DefaultListModel<>();
        this.pokePCModelList  = new DefaultListModel<>();
        
        this.pokeBagDisplayList.setModel(this.pokeBagModelList);
        this.pokePCDisplayList.setModel(this.pokePCModelList);
        
        this.pokeBagList = new pokepookies.pokemon.PokemonList(6, false, this.pokeBagModelList);
        this.pokePCList  = new pokepookies.pokemon.PokemonList(0, true, this.pokePCModelList);
        
        byte[] flags = new byte[1];
        flags[0] = 1;
        
        pokepookies.pokemon.PokemonDatabase.Init();
        pokepookies.pokemon.PokemonDatabase.fillList(pokePCList, flags);        
    }
   


    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">                          
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        jScrollPane1 = new javax.swing.JScrollPane();
        pokePCDisplayList = new javax.swing.JList<>();
        jScrollPane2 = new javax.swing.JScrollPane();
        pokeBagDisplayList = new javax.swing.JList<>();
        moveBtn = new javax.swing.JButton();
        mainTitle = new javax.swing.JLabel();
        mainTitle1 = new javax.swing.JLabel();
        mainTitle2 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(204, 0, 0));
        jPanel1.setForeground(new java.awt.Color(60, 63, 65));

        pokePCDisplayList.setBackground(new java.awt.Color(255, 255, 255));
        pokePCDisplayList.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));
        pokePCDisplayList.setFont(new java.awt.Font("Serif", 0, 12)); // NOI18N
        pokePCDisplayList.setForeground(new java.awt.Color(0, 0, 0));
        pokePCDisplayList.setModel(new javax.swing.AbstractListModel<String>() {
            String[] strings = { "Item 1", "Item 2", "Item 3", "Item 4", "Item 5" };
            public int getSize() { return strings.length; }
            public String getElementAt(int i) { return strings[i]; }
        });
        pokePCDisplayList.setSelectionBackground(new java.awt.Color(51, 0, 0));
        jScrollPane1.setViewportView(pokePCDisplayList);

        pokeBagDisplayList.setBackground(new java.awt.Color(255, 255, 255));
        pokeBagDisplayList.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));
        pokeBagDisplayList.setFont(new java.awt.Font("Serif", 0, 12)); // NOI18N
        pokeBagDisplayList.setForeground(new java.awt.Color(0, 0, 0));
        pokeBagDisplayList.setModel(new javax.swing.AbstractListModel<String>() {
            String[] strings = { "Item 1", "Item 2", "Item 3", "Item 4", "Item 5" };
            public int getSize() { return strings.length; }
            public String getElementAt(int i) { return strings[i]; }
        });
        pokeBagDisplayList.setSelectionBackground(new java.awt.Color(51, 0, 0));
        jScrollPane2.setViewportView(pokeBagDisplayList);

        moveBtn.setBackground(new java.awt.Color(255, 255, 255));
        moveBtn.setFont(new java.awt.Font("Serif", 0, 24)); // NOI18N
        moveBtn.setForeground(new java.awt.Color(0, 0, 0));
        moveBtn.setText("⇄ ");
        moveBtn.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));
        moveBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                moveBtnActionPerformed(evt);
            }
        });

        mainTitle.setBackground(new java.awt.Color(255, 255, 255));
        mainTitle.setFont(new java.awt.Font("Monocraft", 0, 24)); // NOI18N
        mainTitle.setText("PokePC");

        mainTitle1.setBackground(new java.awt.Color(255, 255, 255));
        mainTitle1.setFont(new java.awt.Font("Monocraft", 0, 18)); // NOI18N
        mainTitle1.setText("PC");

        mainTitle2.setBackground(new java.awt.Color(255, 255, 255));
        mainTitle2.setFont(new java.awt.Font("Monocraft", 0, 18)); // NOI18N
        mainTitle2.setText("Mochila");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap()
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 170, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(62, 62, 62)
                        .addComponent(mainTitle1)))
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(mainTitle)
                    .addComponent(moveBtn, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 96, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 35, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jScrollPane2, javax.swing.GroupLayout.PREFERRED_SIZE, 119, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addComponent(mainTitle2)
                        .addGap(22, 22, 22)))
                .addGap(22, 22, 22))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(8, 8, 8)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(mainTitle)
                            .addComponent(mainTitle1))
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 237, Short.MAX_VALUE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(84, 84, 84)
                                .addComponent(moveBtn)
                                .addGap(0, 0, Short.MAX_VALUE))))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(15, 15, 15)
                        .addComponent(mainTitle2)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jScrollPane2)))
                .addContainerGap())
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>                        

    private void moveBtnPokePC(int idx)
    {
        if (idx < 0) return;
        this.pokePCList.exchangePokemons(this.pokeBagList, idx);
    }
    
    private void moveBtnPokeBag(int idx)
    {
        if (idx < 0) return;
        this.pokeBagList.exchangePokemons(this.pokePCList, idx);
    }
    
    private void moveBtnActionPerformed(java.awt.event.ActionEvent evt)
    {                                        
        /* pokebag deve vir primeiro, porque ela pode encher (enquanto o PC é infinito) */
        this.moveBtnPokeBag(this.pokeBagDisplayList.getSelectedIndex());
        this.moveBtnPokePC(this.pokePCDisplayList.getSelectedIndex());        
    }                                     

   
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Pokemon.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Pokemon.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Pokemon.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Pokemon.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Pokemon().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify                    
    private javax.swing.JList<String> pokeBagDisplayList;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JLabel mainTitle;
    private javax.swing.JLabel mainTitle1;
    private javax.swing.JLabel mainTitle2;
    private javax.swing.JButton moveBtn;
    private javax.swing.JList<String> pokePCDisplayList;
    // End of variables declaration                  
}