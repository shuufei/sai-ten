class MemberController < ApplicationController
  def get
    puts 'hoge'
    render :json => {"hoge": "fuga"}
  end
end
