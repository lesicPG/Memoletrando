<?php

namespace App\Modules\Base\Rules;

use Illuminate\Contracts\Validation\Rule;

class ValidCPF implements Rule
{
    /**
    * Create a new rule instance.
    *
    * @return void
    */
    public function __construct()
    {
        //
    }

    /**
    * Determine if the validation rule passes.
    *
    * @param  string  $attribute
    * @param  mixed  $value
    * @return bool
    */
    public function passes($attribute, $value)
    {
        return $this->validate($value);
    }

    /**
    * Get the validation error message.
    *
    * @return string
    */
    public function message()
    {
        return 'O CPF inserido é inválido.';
    }

    /**
     * Valida o cpf inserido
     *
     * @author https://github.com/rafael-neri
     * @source https://gist.github.com/rafael-neri/ab3e58803a08cb4def059fce4e3c0e40
     *
     * @param string $cpf
     * @return bool
     */
    private function validate(string $cpf)
    {

        // Extrai somente os números
        $cpf = preg_replace( '/[^0-9]/is', '', $cpf );

        // Verifica se foi informado todos os digitos corretamente
        if (strlen($cpf) != 11) {
            return false;
        }

        // Verifica se foi informada uma sequência de digitos repetidos. Ex: 111.111.111-11
        if (preg_match('/(\d)\1{10}/', $cpf)) {
            return false;
        }

        // Faz o calculo para validar o CPF
        for ($t = 9; $t < 11; $t++) {

            for ($d = 0, $c = 0; $c < $t; $c++) {
                $d += $cpf{$c} * (($t + 1) - $c);
            }

            $d = ((10 * $d) % 11) % 10;

            if ($cpf{$c} != $d) {
                return false;
            }
        }


        return true;
    }
}
